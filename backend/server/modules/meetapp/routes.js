import { Router } from 'express';

import * as MeetupController from './controller';
// import { requireJwtAuth } from '../../utils/requireJwtAuth';

const routes = new Router();

routes.post('/meetups/new', MeetupController.createMeetup);
routes.get('/meetups', MeetupController.getAllMeetups);

export default routes;
