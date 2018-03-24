import * as _ from "lodash";
const getRelationCategory = require("ct-helpers").getRelationCategory;
import DEFAULT_VALUE from "./defaultValue";
import override from "./plugins/override";

export function getResponse(props: any) {
  const { seoData = {}, keywords = [] } = props;
  return {
    seoData,
    keywords,
  };
}

export function getQueryInfo(where: any) {
  const { siteId, categoryId, brandId, modelId, uri, year } = where;
  let newWhere = _.clone(where);
  newWhere = _.omit(newWhere, ["year"]);

  let modelName = undefined;
  let keywordCondition = {};

  if (siteId && categoryId !== undefined) {
    modelName = "category";
    keywordCondition = {
      siteId,
      categoryId,
      brandId: undefined,
      modelId: undefined,
    };
  }

  if (siteId && categoryId !== undefined && brandId !== undefined) {
    modelName = "brand";
    keywordCondition = {
      siteId,
      categoryId,
      brandId,
      modelId: undefined,
    };
  }

  if (siteId && categoryId !== undefined && brandId !== undefined && modelId !== undefined) {
    modelName = "model";
    keywordCondition = {
      siteId,
      categoryId,
      brandId,
      modelId,
    };

    if (year) {
      modelName = "tag";
      newWhere = {
        uri,
        mode: "year",
      };
    }
  }
  return { modelName, keywordCondition, newWhere };
}

export function overrideData(where: any) {
  return (payload: any) => {
    let { result } = payload;
    if (!result) {
      Object.keys(where).forEach(key => {
        if (
          override[key] &&
          override[key].enable &&
          typeof override[key].func === "function"
        ) {
          result = override[key].func(payload);
        }
      });
    }
    return result;
  };
}

export function getSEOData(response: any) {
  let newResponse = response;
  return (where: any) => {
    const { categoryId, year } = where;
    if (!response) {
      if (year) {
        Object.keys(where).forEach(key => {
          if (
            override[key] &&
            override[key].enable &&
            typeof override[key].func === "function"
          ) {
            newResponse = {
              dataValues: override[key].func({ response }),
            };
          }
        });
      } else {
        const categoryObj = getRelationCategory(categoryId);
        const { parentId } = categoryObj;
        if (DEFAULT_VALUE[parentId]) {
          newResponse = {
            dataValues: DEFAULT_VALUE[parentId],
          };
        }
      }
    }
    return newResponse;
  };
}
