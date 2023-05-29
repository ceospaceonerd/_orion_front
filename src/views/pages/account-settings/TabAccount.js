// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Select from '@mui/material/Select'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import CardMedia from '@mui/material/CardMedia'
import Avatar from '@mui/material/Avatar'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const initialData = {
  role: 'CEO',
  profile: 'Administrator',
  phoneNumber: '809-555-9999',
  telNumber: '809-999-8888',
  address: [
    {
      street: 'Calle Flamenco # 16 APT 1',
      city: 'Santo Domingo Este',
      state: 'Santo Domingo',
      zipcode: '11804',
      country: 'DO'
    }
  ],
  lastName: 'Doe',
  firstName: 'John',
  currency: 'USD',
  language: 'english',
  dob: '03/12/1993',
  timezone: 'gmt-12',
  organization: 'Space One',
  email: 'john.doe@example.com'
}

const ImgStyled = styled('img')(({ theme }) => ({
  width: 100,
  height: 100,
  marginRight: theme.spacing(6),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(2)
  }
}))

const TabAccount = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [userInput, setUserInput] = useState('yes')
  const [formData, setFormData] = useState(initialData)
  const [imgSrc, setImgSrc] = useState('/images/avatars/15.png')
  const [secondDialogOpen, setSecondDialogOpen] = useState(false)

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { checkbox: false } })
  const handleClose = () => setOpen(false)
  const handleSecondDialogClose = () => setSecondDialogOpen(false)
  const onSubmit = () => setOpen(true)

  const handleConfirmation = value => {
    handleClose()
    setUserInput(value)
    setSecondDialogOpen(true)
  }

  const handleInputImageChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
      if (reader.result !== null) {
        setInputValue(reader.result)
      }
    }
  }

  const handleInputImageReset = () => {
    setInputValue('')
    setImgSrc('/images/avatars/15.png')
  }

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <Grid container spacing={6}>
      {/* Account Details Card */}
      <Grid item xs={12}>
        <Card sx={{ position: 'relative' }}>
          <CardMedia sx={{ height: '12.625rem' }} image='/images/cards/background-user.png' />
          <Avatar
            alt='Robert Meyer'
            src={imgSrc}
            sx={{
              width: 75,
              height: 75,

              left: '1.313rem',
              top: '10.28125rem',
              position: 'absolute',
              border: theme => `0.25rem solid ${theme.palette.common.white}`
            }}
          />
          <CardContent>
            <Box
              sx={{
                mt: 5.75,
                mb: 8.75,
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h4'>
                  {formData.firstName} {formData.lastName}
                </Typography>
                
            
                <Typography variant='caption'>
                  {formData.role} at {formData.organization}
                </Typography>
              </Box>
              <IconButton color='primary' aria-label='edit'>
                <Icon icon='tabler:pencil' />
              </IconButton>
            </Box>
            <Box
              sx={{ gap: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}
            ></Box>

            {/* <Typography variant='h6' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}></Typography> */}
            <CardHeader title='User information' />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableBody>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell align='right'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.firstName}
                      </Typography>
                    </TableCell>
                    <TableCell>Date of birth</TableCell>
                    <TableCell align='left'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.dob}
                      </Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>Last Name</TableCell>
                    <TableCell align='right'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.lastName}
                      </Typography>
                    </TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell align='left'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.email}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Role</TableCell>
                    <TableCell align='right'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.role}
                      </Typography>
                    </TableCell>
                    <TableCell>Profile</TableCell>
                    <TableCell align='left'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.profile}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Phone</TableCell>
                    <TableCell align='right'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.phoneNumber}
                      </Typography>
                    </TableCell>
                    <TableCell>Tel</TableCell>
                    <TableCell align='left'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.telNumber}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Currency</TableCell>
                    <TableCell align='right'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.currency}
                      </Typography>
                    </TableCell>
                    <TableCell>Language</TableCell>
                    <TableCell align='left'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.language}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <CardHeader title='Address information' />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableBody>
                  <TableRow>
                    <TableCell>Street</TableCell>
                    <TableCell align='right'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.address[0].street}
                      </Typography>
                    </TableCell>
                    <TableCell>City</TableCell>
                    <TableCell align='left'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.address[0].city}
                      </Typography>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>State</TableCell>
                    <TableCell align='right'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.address[0].state}
                      </Typography>
                    </TableCell>
                    <TableCell>Zip Code</TableCell>
                    <TableCell align='left'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.address[0].zipcode}
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell align='right'>
                      <Typography variant='subtitle1' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
                        {formData.address[0].country}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </Grid>

      {/* Delete Account Card */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Delete Account' />
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 4 }}>
                <FormControl>
                  <Controller
                    name='checkbox'
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <FormControlLabel
                        label='I confirm my account deactivation'
                        sx={errors.checkbox ? { '& .MuiTypography-root': { color: 'error.main' } } : null}
                        control={
                          <Checkbox
                            {...field}
                            size='small'
                            name='validation-basic-checkbox'
                            sx={errors.checkbox ? { color: 'error.main' } : null}
                          />
                        }
                      />
                    )}
                  />
                  {errors.checkbox && (
                    <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-checkbox'>
                      Please confirm you want to delete account
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
              <Button variant='contained' color='error' type='submit' disabled={errors.checkbox !== undefined}>
                Deactivate Account
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>

      {/* Deactivate Account Dialogs */}
      <Dialog fullWidth maxWidth='xs' open={open} onClose={handleClose}>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(6)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              '& svg': { mb: 6, color: 'warning.main' }
            }}
          >
            <Icon icon='tabler:alert-circle' fontSize='5.5rem' />
            <Typography>Are you sure you would like to cancel your subscription?</Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button variant='contained' sx={{ mr: 2 }} onClick={() => handleConfirmation('yes')}>
            Yes
          </Button>
          <Button variant='outlined' color='secondary' onClick={() => handleConfirmation('cancel')}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog fullWidth maxWidth='xs' open={secondDialogOpen} onClose={handleSecondDialogClose}>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(6)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              '& svg': {
                mb: 8,
                color: userInput === 'yes' ? 'success.main' : 'error.main'
              }
            }}
          >
            <Icon fontSize='5.5rem' icon={userInput === 'yes' ? 'tabler:circle-check' : 'tabler:circle-x'} />
            <Typography variant='h4' sx={{ mb: 5 }}>
              {userInput === 'yes' ? 'Deleted!' : 'Cancelled'}
            </Typography>
            <Typography>
              {userInput === 'yes' ? 'Your subscription cancelled successfully.' : 'Unsubscription Cancelled!!'}
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button variant='contained' color='success' onClick={handleSecondDialogClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default TabAccount
