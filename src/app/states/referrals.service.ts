import { Injectable } from '@angular/core';
import { Referral } from '../interfaces/referral';

@Injectable({
  providedIn: 'root',
})
export class ReferralsService {
  referrals: Referral[] = [
    {
      person: 'Charles Kagwi',
      message: `
        <p>Rick is an excellent mentor. We met via the codebuddies project where he gave me guidance on how to learn new technologies and pass job interviews. He is an excellent communicator and an expert in Front-end development.</p>
      `,
      position: 'Software Engineer',
    },
    {
      person: 'Michael Courtenay',
      message: `
        <p>I recommend Rick for development work, particularly around front end development. He is very proactive and willing to investigate and understand new technologies and approaches to find the best fit for the objective of the project. When I worked with Rick we had a number of challenges, unknowns and possible approaches and Rick was able to analyse, compile recommendations and clearly communicate these to the team to make decisions.</p>
      `,
      position: 'Product Owner',
    },
    {
      person: 'Wesley Boekhout',
      message: `
        <p>I had the pleasure of working with Rick on a project for the Dutch Ministry of Foreign Affairs. We worked together on getting an Angular application ready for release.</p><br>
        <p>Rick is a very knowledgeable Angular developer who focuses greatly on providing good and maintainable code. He uses best practices and encourages his team mates to do the same, which has long-term benefit for maintainability.</p><br>
        <p>As someone who was new to Angular development, it was very helpful to have Rick as a more experienced team mate. He is not afraid to provide criticism and is direct with his feedback. Towards the client he is also clear and honest about the progress and potential impediments that occur during projects. He keeps the ball rolling.</p><br>
        <p>With his knowledge and directness, Rick is a great addition to any development team.</p>
      `,
      position: 'Software Engineer',
    },
    {
      person: 'Tom Kleijkens',
      message: `
        <p>Rick is a very skilled developer with a keen eye for detail. He is always willing to go the extra mile to ensure the success of the project. His expertise in front-end development is unmatched, and he is a valuable asset to any team.</p>
      `,
      position: 'Project Manager',
    },
  ];

  getReferrals() {
    return this.referrals;
  }
}
