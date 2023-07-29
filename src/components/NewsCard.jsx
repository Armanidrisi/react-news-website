const NewsCard = ({ news }) => {
  return (
    <>
      <div className="col-md-6 mb-3">
        <div className="card mb-3">
          <img
            src={
              news.urlToImage ? news.urlToImage : "https://dummyimage.com/1280x730"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text" dangerouslySetInnerHTML={{ __html: news.description }} />
            <a href={news.url} target="_blank" className="btn btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
