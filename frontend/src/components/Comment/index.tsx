import React from "react";
interface PropComment {
  idUser: string;
  parendidUSer: string;
  avatar: string;
  contend: string;
  updatedAt: string;
}
interface PropCommentList {
  parent: PropComment;
  reply?: PropComment[];
}
function Comment({
  avatar,
  contend,
  idUser,
  parendidUSer,
  updatedAt,
}: PropComment) {
  return <div>Comment</div>;
}

function CommentList({ parent, reply }: PropCommentList) {
  const [isLoadMore, SetisLoadMore] = React.useState(false);

  return (
    <>
      <Comment avatar="" contend="" idUser="" parendidUSer="" updatedAt="" />
      <div className="mr-4">
        <div className="text-xs font-medium">
          Load More {reply ? reply?.length + 1 : 1} comment
        </div>
        {reply?.map((item: PropComment, index: number) => {
          return (
            <>
              <Comment
                avatar=""
                contend=""
                idUser=""
                parendidUSer=""
                updatedAt=""
                key={index}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default CommentList;
