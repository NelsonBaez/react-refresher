const names =['nome1', 'nome2'];

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>teste1</p>
      <p>teste2</p>
    </div>
  )
}

export default Post;