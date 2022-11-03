import {
  CategoryItem,
  CategoryLink,
  CategoryOffers,
  CategoryTitle,
  CategoryType,
  CategoryWrapper,
  JobCategoryContent,
  JobCategorySection,
} from "./CategoryElements";
import { CategoryData } from "./data";

const JobCategory = () => {
  return (
    <JobCategorySection>
      <JobCategoryContent>
        <CategoryTitle>
          Дизайн в <span>Ташкенте</span>
        </CategoryTitle>
        <CategoryWrapper>
          {CategoryData.map((category, index) => {
            return (
              <CategoryItem key={index}>
                <CategoryLink href="/" passHref>
                  <CategoryType>{category.type}</CategoryType>
                </CategoryLink>
                <CategoryOffers>{category.offers} заявок</CategoryOffers>
              </CategoryItem>
            );
          })}
        </CategoryWrapper>
      </JobCategoryContent>
    </JobCategorySection>
  );
};

export default JobCategory;
