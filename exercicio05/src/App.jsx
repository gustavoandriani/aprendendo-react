import Comment from "./components/Comment"
import NewCommentForm from "./components/NewCommentForm"
import useCommentCollection from "./hooks/useCommentCollection"

export default function App() {
  const { comments, addComment, removeComment } = useCommentCollection()

  return (
    <div id="app">
      <h1>Seção de comentários</h1>

      <NewCommentForm
        addComment={addComment}
      />

      <div className="comments">
        {comments.length > 0 ? comments.map((comment)=> (
          <Comment
            key={comment.id}
            email={comment.email}
            texto={comment.texto}
            onRemove={() => removeComment(comment.id)}
          />)) : (
            <h3 style={{ margin: "4rem auto" }}>Seja o primeiro a comentar!</h3>
          )}
      </div>
    </div>
  )
}