from .nodes_inputs import Assets, Combine, Images, Video
from .nodes_outputs import SelectCreatives, SelectedImages, SelectedVideo
from .nodes_preference import Preference
from .nodes_research import Audiences, Prepare, Run

NODE_CLASS_MAPPINGS = {
    "MindsPreference": Preference,
    "MindsCreativeImages": Images,
    "MindsCreativeVideo": Video,
    "MindsCreativeAssets": Assets,
    "MindsCombineCreatives": Combine,
    "MindsAudiences": Audiences,
    "MindsPrepareCreativeTest": Prepare,
    "MindsRunCreativeTest": Run,
    "MindsSelectCreatives": SelectCreatives,
    "MindsSelectedImages": SelectedImages,
    "MindsSelectedVideo": SelectedVideo,
}

for _name, _node in NODE_CLASS_MAPPINGS.items():
    if _node is not Preference and _name != "MindsAudiences":
        _node.DEPRECATED = True

NODE_DISPLAY_NAME_MAPPINGS = {
    "MindsPreference": "Minds · Audience Preferences",
    "MindsCreativeImages": "Minds · Image Candidates",
    "MindsCreativeVideo": "Minds · Video Candidate",
    "MindsCreativeAssets": "Minds · Hosted Assets / Concepts",
    "MindsCombineCreatives": "Minds · Combine Candidates",
    "MindsAudiences": "Minds · Find Audiences",
    "MindsPrepareCreativeTest": "Minds · Prepare Creative Test",
    "MindsRunCreativeTest": "Minds · Run Reviewed Test",
    "MindsSelectCreatives": "Minds · Select Creatives",
    "MindsSelectedImages": "Minds · Selected Images",
    "MindsSelectedVideo": "Minds · Selected Video",
}
