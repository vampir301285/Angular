import { TableFilterSortingPaginatorComponent } from './table-filter-sorting-paginator/table-filter-sorting-paginator.component';
import { AboutComponent } from './about/about.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ExpenseGuard } from './expense.guard';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'tablepaginator', component: TableFilterSortingPaginatorComponent },
  { path: 'expenses', component: ExpenseEntryListComponent, canActivate: [ExpenseGuard]},
  { path: 'expenses/detail/:id', component: ExpenseEntryComponent, canActivate: [ExpenseGuard] },
  { path: 'expenses/edit/:id', component: EditEntryComponent, canActivate: [ExpenseGuard] },
  { path: 'expenses/add', component: EditEntryComponent, canActivate: [ExpenseGuard] },
  { path: '', redirectTo: 'expenses', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
