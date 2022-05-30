import { Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges } from "@angular/core";

@Directive({
    selector: "[counterOf]"
})

export class CounterDerective {
    constructor(private conteiner : ViewContainerRef, private template : TemplateRef<Object>) {}

    @Input("counterOf")
    counter: number;

    ngOnChanges(changes: SimpleChanges) {
        this.conteiner.clear();
        for (let i = 0; i < this.counter; i++) {
            this.conteiner.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    }
}

class CounterDirectiveContext {
    constructor(public $implicit:any) {}
}
