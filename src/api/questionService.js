import Api from '@/api'

const getQuestions = () => Api().get('//opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple&encode=url3986')

export {
  getQuestions
}
