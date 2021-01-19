import { Profile } from '../app/auth/profiles/profiles.component';

export const AppConfig = {
  production: true,
  clientId: '0de5350d6f237eaa20f8',
  githubUrl: 'https://github.com',
  accessTokenUrl: 'https://catcher-proxy.herokuapp.com/authenticate',
  origin: 'https://CATcher-staging.github.io',
  profiles: [
    <Profile>{
      profileName: 'CATcher',
      encodedText: 'CATcher-org/public_data'
    },
    <Profile>{
      profileName: 'CS2103/T Alpha Test',
      encodedText: 'nus-cs2103-AY2021S2/alpha'
    },
    <Profile>{
      profileName: 'CS2103/T PE Dry run',
      encodedText: 'nus-cs2103-AY2021S2/PED'
    },
    <Profile>{
      profileName: 'CS2103/T PE',
      encodedText: 'nus-cs2103-AY2021S2/PE'
    },
    <Profile>{
      profileName: 'CS2113/T Alpha Test',
      encodedText: 'nus-cs2113-AY2021S2/alpha'
    },
    <Profile>{
      profileName: 'CS2113/T PE Dry run',
      encodedText: 'nus-cs2113-AY2021S2/PED'
    },
    <Profile>{
      profileName: 'CS2113/T PE',
      encodedText: 'nus-cs2113-AY2021S2/PE'
    }
  ]
};
