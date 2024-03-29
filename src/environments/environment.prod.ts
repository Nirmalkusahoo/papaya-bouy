export const environment = {
  production: false,
  baseUrl: 'http://localhost:8090/',
  register: 'api/auth/signup',
  login: 'api/auth/login',
  validate: 'api/v1/auth/validate',
  generateOtp: 'api/v1/auth/generate/otp',
  deleteUser: 'api/v1/auth/delete/',
  addCar: 'api/v1/manufacturers/models/add',
  fetchManufacturers: 'api/v1/manufacturers',
  getAllQuestion: 'api/questions/all/',
  addQuestion: 'api/questions',
  getTopics: 'api/questions/topics',
  getAllStatus: 'api/questions/allstatus'
};
