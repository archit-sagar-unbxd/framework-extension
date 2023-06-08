import React, { useState } from "react";

import "./icons.scss";

import authConfig from "../config/formConfig/authentication";
import searchBoxConfig from "../config/formConfig/searchBox";
import productsConfig from "../config/formConfig/products";
import facetsConfig from "../config/formConfig/facets";
import paginationConfig from "../config/formConfig/pagination";
import pageSizeConfig from "../config/formConfig/pageSize";
import sortingConfig from "../config/formConfig/sorting";
import productViewConfig from "../config/formConfig/productView";
import breadcrumbsConfig from "../config/formConfig/breadcrumbs";
import spellCheckConfig from "../config/formConfig/spellCheck";
import bannerConfig from "../config/formConfig/banners";
import variantsConfig from "../config/formConfig/variants";
import swatchesConfig from "../config/formConfig/swatches";
import noResultsConfig from "../config/formConfig/noResults";
import loaderConfig from "../config/formConfig/loader";
import othersConfig from "../config/formConfig/others";

const FormIcons = (props) => {
	// const { selectedAcc } = props;

	const [selectedAcc, setSelectedAcc] = useState(null);

	const formConfigs = [
		authConfig,
		searchBoxConfig,
		productsConfig,
		facetsConfig,
		paginationConfig,
		pageSizeConfig,
		sortingConfig,
		productViewConfig,
		breadcrumbsConfig,
		spellCheckConfig,
		bannerConfig,
		variantsConfig,
		swatchesConfig,
		noResultsConfig,
		loaderConfig,
		othersConfig,
	];

	let showContent = (i) => {
		if (selectedAcc == i) {
			return setSelectedAcc(null);
		}
		setSelectedAcc(i);
	};

	return (
		<div className="formIcons">
			{formConfigs.map((formConfig = {}, i) => {
				return (
					<div
						className={selectedAcc == i ? "icon-selected" : "icon"}
						key={i}
						onClick={() => showContent(i)}
					>
						<div className="moduleLogo">
							<span
								className={
									formConfig.moduleKey
										? `${formConfig.moduleKey}-icon`
										: `${formConfig.moduleName}-icon`
								}
							></span>
						</div>
						<div className="moduleName">
							{formConfig.moduleKey
								? `${formConfig.moduleKey}`
								: `${formConfig.moduleName}`}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default FormIcons;
