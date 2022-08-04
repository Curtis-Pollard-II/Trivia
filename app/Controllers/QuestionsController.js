import { ProxyState } from "../AppState.js"
import { questionsService } from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"



function _draw(){
    let template = ''
    ProxyState.question.forEach(q => template += q.Template)
    document.getElementById('question').innerHTML = `
    <div>
        ${template}
    </div>
    `
}

export class QuestionsController {
    constructor(){
        ProxyState.on('question', _draw)
        this.getQuestion()
    }


    async getQuestion(){
        try {
            await questionsService.getQuestion()
        } catch (error) {
            console.error('getting question', error)
            Pop.error(error)
            
        }
    }
}