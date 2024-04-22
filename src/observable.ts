type observer<T>=(data:T)=>void

export class Observable<T>{
    private observers:observer<T>[]=[]
    subscribe(observer:observer<T>){
        this.observers.push(observer)
        return()=>{
            this.observers=this.observers.filter((obs)=>obs!==observer )

        }
    }
    notify(data: T){
        this.observers.forEach(obs=>obs(data))
    }
    
}
// type Events="j" | "k"
// const observable = new Observable<Events>()

// observable.subscribe((data=>console.log(1+data)))
// observable.subscribe((data=>console.log(2+data)))
// observable.subscribe((data=>console.log(3+data)))

// observable.notify("j")