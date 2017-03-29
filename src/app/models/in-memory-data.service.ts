import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let items = [
      {
        id: 0,
        title: 'MORILLON',
        image: '../../../assets/img/PH-city1.jpg',
        address: 'Morillons(rue des), 22-26, Robert Lindet(rue), 21-25',
        arrondissement: '75015',
        classement: 'Paris Habitat',
        cotation: '74',
        dateofreceipt: '1955',
        HP: '1.15.MM',
        architecte: 'R.RAROCHE',
        boiteariane: '104174',
        nommage: 'PH_15_1_15MM_###.TIF',
        dimensions: '17X23.5',
        photographe: 'Y.VALUE',
        permalian: 'http:51.254.103.47/idurl/1/1479',
        latitude: 48.833866,
        longitude: 2.29746
      },
      {
        id: 1,
        title: 'CHATILLON SOUS BAGNEUX',
        image: '../../../assets/img/PH-city2.jpg',
        address: 'Roissys(rue des), 142',
        arrondissement: '92020',
        classement: 'Paris Habitat',
        cotation: '74',
        dateofreceipt: '1955',
        HP: '1.15.MM',
        architecte: 'R.RAROCHE',
        boiteariane: '104174',
        nommage: 'PH_15_1_15MM_###.TIF',
        dimensions: '17X23.5',
        photographe: 'Y.VALUE',
        permalian: 'http:51.254.103.47/idurl/1/1479',
        latitude: 48.807829,
        longitude: 2.278411
      }
    ];
    return {items};
  }
}











