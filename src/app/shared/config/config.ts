export class Config {
    static id = "config";
    apiBaseURL = "https://paw.parishabitat.fr/api/d1/webpoints/";
    apiWCWPURL = "?wc=58c6595ee96bf07feb34f48a&wp=58c65943e96bf07feb34f489";
    apiExact = "&exact=true";
    apiPostURL = "https://paw.parishabitat.fr/api/d1/docs";
    auth_token = "8XDsmQszb8Klrp5PYv3eXNbdkdlwG4N5";
    uuid = "udWWxkH4mXfOEy36oweSNCF686NxQP4e";

    constructor() {}
    //name = "Name";
    //appName = "ApplicationName";
    //version = "1.0.0-alpha";
    //accesskey = 's3ssiong3tk3y';
    //realtorId = "";
    //user_type = '';
    //realtors: Array<{ _id : string, name : string }>
    //realtorObject: any[];
    //facebook_appId = '300159316999844';
}

export enum SearchMode {
  ALL = 0,
  RESULTS_PER_PAGE_10,
  RESULTS_PER_PAGE_20,
  RESULTS_PER_PAGE_30,
  BY_TITLE,
  BY_RANKING,
  BY_OPERATION,
  BY_DATEOFRECEIPT,
  BY_ARCHITECTE,
  BY_ARIANEBOX,
  BY_PHOTOGRAPHER
}
