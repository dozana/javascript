const day = 'thursday';

switch(day) {
  case 'monday':
    console.log('Its monday today');
    break;
  case 'tuesday':
    console.log('Its tuesday');
    break;
  case 'wednesday':
    console.log('Its wednesday');
    break;
  case 'tursday':
    console.log('Its tursday');
    break;
  case 'friday':
    console.log('Its friday');
    break;
  case 'saturday':
    console.log('Its saturday');
    break;
  case 'sunday':
    console.log('Its sunday');
    break;
  default:
    console.log('Not a valid day');
}


if(day === 'monday') {
  console.log('Its monday today');
} else if(day === 'tuesday') {
  console.log('Its tuesday today');
} else if(day === 'wednesday') {
  console.log('Its wednesday today');
} else if(day === 'tursday') {
  console.log('Its tursday today');
} else if(day === 'friday') {
  console.log('Its friday today');
} else if(day === 'saturday') {
  console.log('Its  today');
} else if(day === 'sunday') {
  console.log('Its sunday today');
} else {
  console.log('Not a valid day');
}