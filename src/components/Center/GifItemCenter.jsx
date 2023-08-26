export const GifItemCenter = ({ img }) => {
  return (
    <div className="card-gifItemCenter">
      <div className="card-img-gifItemCenter">
        <img src={img.url} />
      </div>
      <div className="card-body-gifItemCenter">
        <h2 className="card-title-gifItemCenter">{img.title}</h2>
        <p className="card-intro-gifItemCenter">
          Driver is a skilled Hollywood stuntman who moonlights as a getaway
          driv...
        </p>
      </div>
    </div>
  );
};
