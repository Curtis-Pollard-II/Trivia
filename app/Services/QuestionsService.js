import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"

class QuestionsService {
    async getQuestion(){
    let res = await axios.get('https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=boolean')
        console.log('get question response', res)
        ProxyState.question = res.data.results.map(q => new Question(q))
}
}




export const questionsService = new QuestionsService()