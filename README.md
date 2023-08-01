## FirstStepTech

FirstStepTech is a tool to help junior developers find jobs and a tool for recruiters to find junior level talent.
The goal is to streamline the process for both parties by automatically sending resumes/profiles to recruiters based on
a variety of parameters that the recruiter is looking for. This includes skills, work preference (remote/onsite/either),
location, etc.

This tool is for finding junior level talent because once you combine all forms of experience on a job board it becomes much harder to find true entry/junior level positions. There are many issues with job boards, especially when it comes to developer positions. This project hopes to allievate some of these issues.

## Wireframe (Work in progress)

### Landing Page

<img src="https://i.imgur.com/agfJdBj.png" alt="Landing Page" width="600"/>

### Applications Page

<img src="https://i.imgur.com/RY8JCuP.png" alt="Applications Page" width="600"/>

### Dashboard

<img src="https://i.imgur.com/E6mAObW.png" alt="Applications Page" width="600"/>

## API/User

Returns JSON data about a specific user
<br>

- **URL**

  /api/user/[id]

* **Method**

  `GET`

Updates a user's first and last name
<br>

- **URL**

  /api/user/[id]/name

* **Method**

  `PATCH`
