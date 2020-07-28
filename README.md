# Maw a lawn

Challenge Answers are in `Full_Stack_Developer_TechChallenges_and_Solutions.md` file

## Description

- This project is NestJs Project.
- The UI is in Angular 8.
- The frontend or UI source is inside this ui folder.
- This is done to make a single repository for the complete project.
- There are no test cases written. The test files or folder are auto-generated.
- MongoDB is being used for the database and mongoose library used for it.
- Bootstrap CSS is used for the UI. The CSS file has been included in ui/src/index.html page.


## Usage 

- **Step1:** Register with your name, email, password and address. The address is optional. After successful registration you will be redirected to the dashboard.
- **Step2:** Enter Plot Area and click on Continue Button. This will show you the price and discount if any.
- **Step3:** Apply Coupon code if you like. Coupon codes are `MOW5` with a discount of 5%, `MOW10` with a discount of £10. Enter coupon code and click on Apply.
- **Step4:** Click on Book to finally make a booking. This will return you the booking id in the alert. 

### Folder nomenclatures 
**_dto_** - Data transfer objects are used to request and response body.   
**_schemas_** - Contains the mongo schema.    
**_ui_** - Contains the Angular UI code.  


## Installation

NestJS
```bash
$ npm install
```


Angular
```bash
$ cd ui/
$ npm install
```

## Running the app

NestJS
```bash
$ npm run start
```

Angular 
```bash
$ cd ui/
$ ng serve
```


