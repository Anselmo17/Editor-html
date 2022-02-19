import { Component, OnInit } from '@angular/core';
import Quill  from 'quill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

   toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['image', 'code-block','link', 'blockquote'],                          // add image
    ['clean']                                         // remove formatting button
  ];

  ngOnInit() {
    this.initEditor();
  }

  initEditor() {
    var quill = new Quill('#editor', {
      modules: {
        toolbar: this.toolbarOptions
      },
      placeholder: 'Adicione oque precisa...',
      theme: 'snow' // 'snow'  // or 'bubble'
    });
  }
}

