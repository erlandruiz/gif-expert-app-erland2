import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { AddCategory2 } from "./components/AddCategory2";
import { AddCenterCategory } from "./components/AddCenterCategory";
import { TitleCenter } from "./components/Center/TitleCenter";
import { InputCenter } from "./components/Center/Inputcenter";
import { ListCenter } from "./components/Center/ListCenter";
import { GifGrid } from "./components/GifGrid";
import { GifGridRight } from "./components/Right/GifGridRight";
import { Loader } from "./components/Loader";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const [categoriesErland, setCategoriesErland] = useState(["Goku"]);

  const [center, setCenter] = useState(["Centro C"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  const onAddCategory2 = (newCategoryErland) => {
    if (categoriesErland.includes(newCategoryErland)) return;
    setCategoriesErland([newCategoryErland, ...categoriesErland]);
  };

  const onAddCenter = (newCenter) => {
    if (center.includes(newCenter)) return;
    setCenter([newCenter, ...center]);
  };

  return (
    <>
      <div className="containerGif">
        <div className="containerLeft">
          <div className="titleLeft">
            <h1>GifExpertApp</h1>
          
          </div>

          <div className="contentLeft">
            <div className="contentAddcategoryLeft">
              <AddCategory
                onNewCategory={(value) => {
                  onAddCategory(value);
                }}
              />
            </div>

            {categories.map((category) => {
              return <GifGrid key={category} category={category} />;
            })}
          </div>
        </div>

        {/* Center */}
        <div className="containerRight">
          <div className="titleRight">
            <TitleCenter />
          </div>

          <div className="contentRight">
            <div className="contentAddcategoryRight">
              <InputCenter
                onInputCenter={(newCenter) => onAddCenter(newCenter)}
              />
            </div>

            {center.map((category) => {
              return <ListCenter key={category} category={category} />;
            })}
          </div>
        </div>
        {/* Center */}

        {/* Right */}

        <div className="containerRight">
          <div className="titleRight">
            <h1>Gif</h1>
          </div>

          <div className="contentRight">
            <div className="contentAddcategoryRight">
              <AddCategory2
                onNewCategoryErland={(valueErland) => {
                  onAddCategory2(valueErland);
                }}
              />
            </div>

            {categoriesErland.map((category) => {
              return <GifGridRight key={category} category={category} />;
            })}
          </div>
        </div>

        {/* Right */}
      </div>
    </>
  );
};
