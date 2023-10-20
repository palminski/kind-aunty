import { Component } from '@angular/core';

interface ListItem {
  header: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {

  //Experience
  professionalExperiences: ListItem[] = [
    {
      header: "Development Director, Teacher Trainer, and Instructional Coach (2005-2023)",
      description: "Worked at Lee Pesky Learning, a non-profit specializing in serving children and families with learning challenges, designing courses in evidence-based literacy and math instruction while also training preschool and elementary teachers in Idaho, Oregon, Ohio, North Dakota."
    },
    {
      header: "Children’s Author (2020)",
      description: "Published A Dog Named Bronco"
    },
    {
      header: "Houghton Mifflin Representative for Idaho (2005-2007)",
      description: "Sold elementary curricular materials and trained teachers how to effectively implement the resources."
    },
    {
      header: "Reading Specialist at Lee Pesky Learning Center (2003-2005)",
      description: "Worked with children diagnosed with dsyslexia and other learning challenges to improve learning outcomes."
    },
    {
      header: "Elementary School Teacher (1988-2003)",
      description: "Taught grades 1 st -3 rd in a variety of settings. Also served as the K-6 th grade Design Technology Coordinator (now called STEAM) for a year after securing a grant."
    },
    {
      header: "Summer Program Director (1996-2001)",
      description: "Ran the summer program for many years at Rio Grande Elementary School in Santa Fe, New Mexico."
    },
    {
      header: "Preschool Teacher (1985-1987)",
      description: "Worked in preschools including Head Start."
    },
    {
      header: "Board Member (2010-2014)",
      description: "Asked to serve on the United Way board for the Treasure Valley."
    },
  ]

  //Education and Degrees
  degrees: ListItem[] = [
    {
      header: "Literacy Education, M.Ed., Washington State University",
      description: ""
    },
    {
      header: "Elementary Education, Minor in Mathematics Education, B.S., Oregon State University",
      description: ""
    },
  ]
}
