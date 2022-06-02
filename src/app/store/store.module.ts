import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "app/model/model.module";
import { StoreComponent } from "./store.component";
import { CounterDerective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [StoreComponent, CounterDerective, CartSummaryComponent],
    exports: [StoreComponent]
})
export class StoreModule {}