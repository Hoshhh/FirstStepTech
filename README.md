## FirstStepTech

FirstStepTech is a tool to help junior developers find jobs and a tool for recruiters to find junior level talent.
The goal is to streamline the process for both parties by automatically sending resumes/profiles to recruiters based on
a variety of parameters that the recruiter is looking for. This includes skills, work preference (remote/onsite/either),
location, etc.

This tool is for finding junior level talent because once you combine all forms of experience on a job board it becomes much harder to find true entry/junior level positions. There are many issues with job boards, especially when it comes to developer positions. This project hopes to allievate some of these issues.

## Wireframe (Work in progress)

### Landing Page

<img src="https://i.imgur.com/Xtug8zx.png" alt="Landing Page" width="800"/>

### Applications Page

<img src="https://i.imgur.com/RY8JCuP.png" alt="Applications Page" width="800"/>

### Dashboard

<img src="https://i.imgur.com/E6mAObW.png" alt="Applications Page" width="800"/>

## API/User

Returns JSON data about a specific user
<br>

- **URL**

  /api/user/[id]

* **Method**

  `GET`

Updates a user's needed information (first/last name, account type, etc.)
<br>

- **URL**

  /api/user/[id]/info

* **Method**

  `PATCH`

Updates a user's skills section
<br>

- **URL**

  /api/user/[id]/skills

* **Method**

  `PATCH`

Updates a user's about section
<br>

- **URL**

  /api/user/[id]/about

* **Method**

  `PATCH`

Updates a user's links section
<br>

- **URL**

  /api/user/[id]/links

* **Method**

  `PATCH`

Updates a user's availability section
<br>

- **URL**

  /api/user/[id]/availability

* **Method**

  `PATCH`
