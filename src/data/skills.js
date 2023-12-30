import { AndroidLogo, WebLogo } from '../ui/common/svgs';
import { FlutterDash, Web } from '@mui/icons-material';
import FlutterLogo from '../ui/common/svgs/FlutterLogo';

const skills = [
  {
    name: 'Web',
    logo: {
      Svg: Web,
      color: '#000',
    },
    languages: ['JavaScript', 'HTML', 'CSS', 'SQL'],
    libraries: ['React', 'Next', 'Vue', 'Redux', 'NestJS', 'TypeORM'],
    tools: ['Git', 'Docker', 'Visual Studio Code'],
  },
  {
    name: 'Flutter',
    logo: {
      Svg: FlutterLogo,
      color: '#000',
    },
    languages: ['Dart', 'SQL'],
    libraries: [
      'Floor',
      'BLoC',
      'Retrofit',
      'Shared Preferences',
      'Material Design',
    ],
    tools: ['Visual Studio Code', 'Git', 'Notion'],
  },
  {
    name: 'Android',
    logo: {
      Svg: AndroidLogo,
      color: '#3BD37F',
    },
    languages: ['Java', 'Kotlin', 'XML', 'SQL'],
    libraries: ['Jetpack', 'Retrofit', 'Dagger Hilt', 'Room', 'RxJava', 'Flow'],
    tools: ['Android Studio', 'Git'],
  },
];

export default skills;
