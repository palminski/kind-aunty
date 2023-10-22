import { Component } from '@angular/core';

interface Service {
  title: string,
  description: string,
  pricing: string,
  timeRequirements: string[]
}

@Component({
  selector: 'app-for-parents',
  templateUrl: './for-parents.component.html',
  styleUrls: ['./for-parents.component.css']
})
export class ForParentsComponent {

  services: Service[] = [
    {
      title: "Assessment Services",
      description: `It is important to know if your child is reading at grade-level. I have decades of
      experience assessing students’ literacy skills. My assessment services include testing children using a
      variety of nationally revered screening tools and meeting with parents to debrief the results and give
      recommendations. I can also write customized reports.`,
      pricing: `$85/hour via Zoom or in-person, if in-person visits are possible add travel costs at $30/hour plus
      mileage.`,
      timeRequirements: [
        "Testing: 1-1.5 hours",
        "Debriefing with parents: 1-1.5 hours",
        "Writing a customized report takes 2 hours (optional)",
      ]
    },
    {
      title: "Intervention Services",
      description: `Hiring an experienced and sensitive remediation specialist is critical because the
      quicker your child can read at grade-level, the more successful your child will be in school and in life! I
      offer 45-minute sessions to remediate reading and writing deficits.`,
      pricing: `Costs: Once/week= $65 Twice/week= $120`,
      timeRequirements: []
    },
    {
      title: "Educational Consulting",
      description: `Navigating the world of education and school systems can be tricky, confusing, frustrating, and even
      intimidating at times. I can help give advice and insight from over 36 years of experience as an educator
      and administrator in both public and independent schools. I can even attend meetings with the school
      to help everyone better support your child.`,
      pricing: `$85/hour plus travel expenses, if applicable`,
      timeRequirements: [
        "Testing: 1-1.5 hours",
        "Debriefing with parents: 1-1.5 hours",
        "Writing a customized report takes 2 hours (optional)",
      ]
    },

  ]

}
