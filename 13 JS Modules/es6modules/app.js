import User, {createUrl, gravatar} from './src/user';

const levi = new User('levi-zitting', 'levizitting5663@gmail.com', 'leviztting.com');
const profile = createUrl(levi.name);
const image = gravatar(levi.email);
console.log(levi.email);
console.log(profile, image);