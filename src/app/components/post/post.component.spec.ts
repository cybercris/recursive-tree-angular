import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import postId from 'src/app/constants/shownPostId';

const getEmptyPost = () => ({
      id: postId,
      title: '',
      subtitle: '',
      content: '',
      timestamp: '',
      author: {username: '', id: 1},
      comments: [],
});

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;

    component.post = getEmptyPost();
    component.postId = postId;
    component.ngOnInit();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
