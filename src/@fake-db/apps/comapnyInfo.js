import mock from 'src/@fake-db/mock'


const data ={
  company:[
    {
      id: 1,
      rnc: '123445',
      ceo: 'Galen Slixby',
      name: 'Yotz PVT LTD',
      address: 'editor',
      fiscalyear: '01/02/2023',
      country: 'El Salvador',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      currentPlan: 'enterprise',
      status: 'active',
      logo: '',
      currency:'DOP',
      businesshours: [{
        id:1,
        day:'Monday',
        open:'9:00 AM',
        close :'6:00 PM'}]
    }]
}


// POST: Add new user
mock.onPost('/register/company/add-company').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data).data
  const { length } = data.users
  let lastIndex = 0
  if (length) {
    lastIndex = data.users[length - 1].id
  }
  user.id = lastIndex + 1
  data.users.unshift({ ...company, logo:'',rnc: '', ceo: '', name: '',address:'',fiscalyear:'',country:'',contact:'',email:'',
  currency:''})

  return [201, { user }]
})

// GET: DATA
mock.onGet('/apps/pages/account-settings/security/').reply(config => {
  const { q = '', role = null, status = null, currentPlan = null } = config.params ?? ''
  const queryLowered = q.toLowerCase()

  const filteredData = data.users.filter(
    user =>
      (user.username.toLowerCase().includes(queryLowered) ||
        user.fullName.toLowerCase().includes(queryLowered) ||
        user.role.toLowerCase().includes(queryLowered) ||
        (user.email.toLowerCase().includes(queryLowered) &&
          user.currentPlan.toLowerCase().includes(queryLowered) &&
          user.status.toLowerCase().includes(queryLowered))) &&
      user.role === (role || user.role) &&
      user.currentPlan === (currentPlan || user.currentPlan) &&
      user.status === (status || user.status)
  )

  return [
    200,
    {
      allData: data.users,
      users: filteredData,
      params: config.params,
      total: filteredData.length
    }
  ]
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  const userId = config.data
  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})

// GET: DATA
mock.onGet('/apps/compa/project-list').reply(config => {
  const { q = '' } = config.params ?? ''
  const queryLowered = q.toLowerCase()

  const filteredData = projectListData.filter(
    user =>
      user.projectTitle.toLowerCase().includes(queryLowered) ||
      user.projectType.toLowerCase().includes(queryLowered) ||
      user.totalTask.toLowerCase().includes(queryLowered) ||
      user.hours.toLowerCase().includes(queryLowered) ||
      String(user.progressValue).toLowerCase().includes(queryLowered)
  )

  return [200, filteredData]
})
