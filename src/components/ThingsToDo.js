import hyde from "./images/hyde park.webp"

function ThingsToDo() {
  return (
    <div>
      <div class="container-fluid">
        <h3>Hyde Park</h3>
        <div class="center row">
          <span class="col-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere elit nisl, nec imperdiet ipsum euismod nec. Nulla vel massa sodales, imperdiet purus at, porta lorem. Sed dignissim lobortis tortor, in consequat mi. Sed sit amet eros eu velit egestas molestie a id magna. Maecenas sed arcu dignissim, suscipit dolor egestas, tincidunt dui. Duis ac finibus lectus. Aliquam fermentum aliquet interdum. Duis maximus, diam a viverra fringilla, sem dui ornare tortor, a imperdiet felis lacus a urna. Aenean at nulla a erat elementum consequat. Duis pharetra nunc felis, quis rutrum ligula convallis sed. Nunc enim arcu, scelerisque quis urna ut, fermentum aliquam sem. Proin non sagittis est. Nam est metus, placerat lacinia magna in, pretium ullamcorper orci. Phasellus mollis metus magna, ut consequat lacus porttitor sit amet. Donec ut nisl sem.</span>
          <img src={hyde} alt="hyde park" class="img-fluid round img-marg col-5"/>
        </div>
      </div>
    </div>
  );
}


export default ThingsToDo;
