import Card from 'react-bootstrap/Card';


function Post() {
  return (
    <>

    <div style={{position:"absolute"}}>
      <Card>

        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>

      </Card>

      <br />

      <Card>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
      </div>

    </>
  );
}

export default Post;