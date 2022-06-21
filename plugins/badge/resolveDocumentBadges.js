// Import the default document badges resolver
import defaultResolve from "part:@sanity/base/document-badges";
import HalloWorldBadge from "./publish-badge";

const resolveDocumentBadges = (props) => {
	return [...defaultResolve(props), HalloWorldBadge];
};

export default resolveDocumentBadges;
