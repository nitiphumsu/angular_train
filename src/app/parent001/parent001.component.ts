import {Component, OnInit} from '@angular/core';
import {MovieService} from '../service/movie.service';
import {listMovie} from '../model/movie.model';
import {FormBuilder, Validators} from '@angular/forms';
@Component({selector: 'app-parent001', templateUrl: './parent001.component.html', styleUrls: ['./parent001.component.scss']})
export class Parent001Component implements OnInit {
    message : string = "Input From parent";
    showMessage : string = '';

    // ----------- Home Work -----------
    movieId : string = '';
    movieType : string = '';
    moviePrice : Number | undefined;
    movieName : string = '';
    form : any;

    public listmovie : listMovie | undefined;

   // ----------- Home Work ----------- 
    constructor(private MovieService : MovieService, private fb : FormBuilder) {}

    // ----------- Home Work -----------
    ngOnInit(): void {
        this.form = this.fb.group({id: ['']});
    }

    alreadySend(value : string): void {
        this.showMessage = value;
    }

    // ----------- Home Work -----------
    submit(): void {
        this.movieId = this.form.get('id') ?. value;
    }

    // ----------- Home Work -----------
    onMovieData(movieList : listMovie): void {
        this.listmovie = movieList;
        console.log(this.listmovie);
        this.movieId = this.listmovie.Movieid;
        this.movieType = this.listmovie.TypeMovie;
        this.moviePrice = this.listmovie.MoviePrice;
        this.movieName = this.listmovie.NameMovie ?? '';
    }

}
