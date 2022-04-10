# Interview Scheduler

* Interview Scheduler is an intuitive single-page application that allows a user to book, edit or delete interviews.

* The user has the ability input the name of the interviewee, and can select one interviewer from the provided list of interviewers who are avalable at that time.

* This project uses ReactJS on the front-end and Node, Express, PosgreSQL, and Axios on the backend.

### Dependencies

- axios
- @testing-library/react
- react-test-renderer
- node-sass
- cypress

### Setup

* Clone, the repository, then install dependencies with `npm install`.

* To make bookings and save interviews in a database, a Scheduler API must be installed from https://github.com/lighthouse-labs/scheduler-api and a PostgreSQL database must be created on a local machine.

#### Running Webpack Development Server

```sh
npm start
```

#### Running Jest Test Framework

```sh
npm test
```

#### Running Storybook Visual Testbed

```sh
npm run storybook
```

## Interview Scheduler App

![Show Appointments](https://github.com/chatcher20/scheduler/blob/master/public/images/show_appointments.png?raw=true)

![Create Appointment](https://github.com/chatcher20/scheduler/blob/master/public/images/create_appointment.png?raw=true)

![Edit/Delete Appointment](https://github.com/chatcher20/scheduler/blob/master/public/images/edit_delete_appointment.png?raw=true)
