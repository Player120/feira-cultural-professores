An API developed for the registering of TEACHER type users, made for use in the feira-cultural project that I developed in my senior year
of my web development technical course back in 2025.
It uses Node.js frameworks such as cors, dotenv, express and mongoose in order to create users for teachers, that contain information about
their name, area, specialties, classes they teach and if they are open to evaluate or orient projects. It stores all accounts and
their information in a MongoDB database, making it possible to authenticate and log in into any accounts created here using the
feira-cultural-auth API, that will pull all information directly from the database.

It is recomended to have all 3 APIs, feira-cultural-alunos, feira-cultural-professores and feira-cultural-auth, running at the same time
in order to have full functionality.
