// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// APP
import { NovoLoadingModule, NovoListModule } from './../../novo-elements';
import { QuickNoteElement } from './QuickNote';
import { QuickNoteResults } from './extras/quick-note-results/QuickNoteResults';

@NgModule({
    imports: [CommonModule, FormsModule, NovoLoadingModule, NovoListModule],
    declarations: [QuickNoteElement, QuickNoteResults],
    exports: [QuickNoteElement, QuickNoteResults]
})
export class NovoQuickNoteModule {
}