const getSleepHours = day => {
    day = day.toLowerCase()
    switch(day){
      case 'monday': return 8
        break
      case 'tuesday': return 9
        break
      case 'wednesday': return 7
        break
      case 'thursday': return 6
        break
      case 'friday': return 8
        break
      case 'saturday': return 10
        break
      case 'sunday': return 10
        break
      default: console.log('Invalid Value')
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 8
    return idealHours * 7
  }
  
  const calculateSleepDept = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours()
    if(actualSleepHours === idealSleepHours){
      console.log('User got the perfect amount of sleep')
    } else if(actualSleepHours > idealSleepHours){
      console.log('User got more sleep than needed')
      console.log(`User should sleep ${actualSleepHours - idealSleepHours} hours less`)
    } else {
      console.log('User should get some rest')
      console.log(`User should sleep ${idealSleepHours - actualSleepHours} hours more`)
    }
  }
  calculateSleepDept()