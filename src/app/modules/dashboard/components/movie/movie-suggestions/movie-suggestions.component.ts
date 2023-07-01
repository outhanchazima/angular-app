import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-suggestions',
  templateUrl: './movie-suggestions.component.html',
  styleUrls: ['./movie-suggestions.component.scss'],
})
export class MovieSuggestionsComponent implements OnInit {
  public suggestedMovies: any = [];
  public showNewMovieModal: boolean = false;
  public uploadedImage: File | null = null;
  public suggestionForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.suggestionForm = this._formBuilder.group({
      title: ['', Validators.required],
      movieType: ['', Validators.required],
      reason: ['', Validators.required],
      image: [null, Validators.required],
    });

    // Initialize the suggestion form
    this.suggestedMovies = [
      {
        title: 'Fast and Furious',
        movieType: 'Part Two',
        reason: 'a lot of incomplete stories',
        imageBase64: '/assets/images/incredibles 3.jpg',
      },
      {
        title: 'Fast and Furious',
        movieType: 'Part Two',
        reason: 'a lot of incomplete stories',
        imageBase64: '/assets/images/incredibles 3.jpg',
      },
      {
        title: 'Fast and Furious',
        movieType: 'Part Two',
        reason: 'a lot of incomplete stories',
        imageBase64: '/assets/images/incredibles 3.jpg',
      },
      {
        title: 'Fast and Furious',
        movieType: 'Part Two',
        reason: 'a lot of incomplete stories',
        imageBase64: '/assets/images/incredibles 3.jpg',
      },
      {
        title: 'Fast and Furious',
        movieType: 'Part Two',
        reason: 'a lot of incomplete stories',
        imageBase64: '/assets/images/incredibles 3.jpg',
      },
      {
        title: 'Fast and Furious',
        movieType: 'Part Two',
        reason: 'a lot of incomplete stories',
        imageBase64: '/assets/images/incredibles 3.jpg',
      },
      {
        title: 'Fast and Furious',
        movieType: 'Part Two',
        reason: 'a lot of incomplete stories',
        imageBase64: '/assets/images/incredibles 3.jpg',
      },
      {
        title: 'Fast and Furious',
        movieType: 'Part Two',
        reason: 'a lot of incomplete stories',
        imageBase64: '/assets/images/incredibles 3.jpg',
      },
    ];
  }

  ngOnInit() {}

  toggleShowNewMovieModal() {
    this.showNewMovieModal = !this.showNewMovieModal;
  }

  handleImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }

  addNewSuggestion() {
    console.log('Afaffasfafasfffdaf');
    const { title, movieType, reason } = this.suggestionForm.value;

    // Convert the selected image to Base64 string
    this.convertImageToBase64(this.uploadedImage).then((imageBase64) => {
      // Create a new suggestion object with the Base64 image and form data
      const suggestionData = { title, movieType, reason, imageBase64 };

      // Save the suggestion data to local storage or send it to the server
      // ...

      // Update the suggestedMovies array with the new suggestion
      this.suggestedMovies.push(suggestionData);

      // Close the form modal and reset the form
      this.toggleShowNewMovieModal();
    });
  }

  convertImageToBase64(image: File | null): Promise<string | null> {
    return new Promise((resolve, reject) => {
      if (image) {
        const reader = new FileReader();
        reader.onload = (event: any) => {
          resolve(event.target.result);
        };
        reader.onerror = (event: any) => {
          reject(event.target.error);
        };
        reader.readAsDataURL(image);
      } else {
        resolve(null);
      }
    });
  }
}
