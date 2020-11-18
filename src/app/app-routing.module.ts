import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogDemo } from './features/dialog/dialog-demo';
import { SnackbarDemo } from './features/snackbar/snackbar-demo';
import { PaginatorDemo } from './features/paginator/paginator-demo';
import { SpinnerDemo } from './features/spinner/spinner-demo';
import { DropdownDemo } from './features/dropdown/dropdown-demo';
import { ProgressBarDemo } from './features/progress-bar/progress-bar-demo';
import { Home } from './features/home/home';
import { DebounceDemo } from './features/debounce/debounce-demo';
import { ModalSearchDemo } from './features/modal-search/modal-search-demo';
import { TabsDemo } from './features/tabs/tabs-demo.component';
import { SwitchDemo } from './features/switch/switch-demo';
import { TooltipDemo } from './features/tooltip/tooltip-demo';
import { AlertDemo } from './features/alert/alert-demo';
import { AnimatedCardDemo } from './features/animated-card/animated-card-demo';
import { TableDemo } from './features/table/table-demo';
import { SortDemo } from './features/sort/sort-demo';
import { EditInPlaceDemo } from './features/edit-in-place/edit-in-place-demo';
import { DatePickerDemo } from './features/date-picker/date-picker-demo';

const appRoutes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'dialog',
    component: DialogDemo,
  },
  {
    path: 'snackbar',
    component: SnackbarDemo,
  },
  {
    path: 'alert',
    component: AlertDemo,
  },
  {
    path: 'animated-card',
    component: AnimatedCardDemo,
  },
  {
    path: 'paginator',
    component: PaginatorDemo,
  },
  {
    path: 'spinner',
    component: SpinnerDemo,
  },
  {
    path: 'dropdown',
    component: DropdownDemo,
  },
  {
    path: 'progress-bar',
    component: ProgressBarDemo,
  },
  {
    path: 'debounce',
    component: DebounceDemo,
  },
  {
    path: 'modal-search',
    component: ModalSearchDemo,
  },
  {
    path: 'tabs',
    component: TabsDemo,
  },
  {
    path: 'tabs/:basicTabIndex',
    component: TabsDemo,
  },
  {
    path: 'switch',
    component: SwitchDemo,
  },
  {
    path: 'tooltip',
    component: TooltipDemo,
  },
  {
    path: 'table',
    component: TableDemo,
  },
  {
    path: 'edit-in-place',
    component: EditInPlaceDemo,
  },
  {
    path: 'sort',
    component: SortDemo,
  },
  {
    path: 'date-picker',
    component: DatePickerDemo,
  },
  {
    path: '**',
    component: Home,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
