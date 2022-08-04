
export class Question {
    constructor({category, question, correct_answer, incorrect_answer }) {
        this.category = data.category
        this.question = data.question
        this.correct_answer = data.correct_answer
        this.incorrect_answer = data.incorrect_answer
    }

    get Template(){
        return`
        <div class="card bg-dark mb-3 elevation-2 p-3 text-white">
            <h5>${this.category}</h5>
            <h2>${this.Question}</h2>
            <p> ${this.correct_answer}</p>
        </div>
        `
    }

}