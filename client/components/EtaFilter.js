import {
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
} from '@material-ui/core'

const EtaFilter = ({ value, handleChange }) => {
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>Filter based on ETA</FormLabel>
      <RadioGroup
        aria-label='etaFilter'
        name='etaFilter'
        value={value}
        onChange={handleChange}
        row
      >
        <FormControlLabel
          value='15'
          control={<Radio />}
          label='less than 15 minutes'
        />
        <FormControlLabel
          value='60'
          control={<Radio />}
          label='less than 1 hour'
        />
        <FormControlLabel value='' control={<Radio />} label='All' />
      </RadioGroup>
    </FormControl>
  )
}
export default EtaFilter
