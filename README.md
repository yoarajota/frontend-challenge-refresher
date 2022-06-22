# 👨🏻‍💻 FRONT-END CHALLENGE

## 1. REFRESHER Trends

Trends are essential part of REFRESHER's content. Bounded within the application they are our blog content. Therefore, we rely on their good quality, free availability and search engine optimization to engage more people.

Currently, a trend page is composed by 6 principal elements: `header`, `breadcrumb`, `post content`, `share buttons`, `related content` and `comment box`. Here are some examples:
- https://www.refresher.com.br/tendencias/maximizando-a-usabilidade-parte-ii
- https://www.refresher.com.br/tendencias/design-para-os-sentidos-parte-ii
- https://www.refresher.com.br/tendencias/zennials-serie-design-conectado-com-o-futuro-3-6

With that in mind, you should now set up your environment.

---
## 2. Setting up environment

### 2.1 Back-end REST API mock
```bash
cd backend
npm install
json-server -p 8000 -w db.json
```
This will install all npm required dependencies and start a RESTful API at http://localhost:8000 watching its seeder `/backend/db.json`. The resources available for this challenge are:
- http://localhost:8000/trends

### 2.2 Front-end
```bash
cd frontend
npm install
npm start
```
With that you'll have a fresh ready-to-go react app in `/frontend` running at http://localhost:3000

---
## 3. Challenge
Create a **mobile-first**, **responsive** new trend page for non-logged users making sure to use all 6 components of a trend page cited.