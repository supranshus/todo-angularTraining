

export class Todo{

    public todo:string='';
    public date:Date | undefined;

    constructor(todo:string){
        this.todo=todo;
        this.date=new Date();
    }
}