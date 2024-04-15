const CampaignType = require("../models/campaignType");

const getAllCampaignTypes = async () => {
  try {
    const campaignTypes = await CampaignType.findAll();
    return campaignTypes;
  } catch (error) {
    throw new Error("Error fetching campaign types: " + error.message);
  }
};

const createCampaignType = async (type) => {
  try {
    return await CampaignType.create({ type });
  } catch (error) {
    throw new Error("Error creating campaign type: " + error.message);
  }
};

const updateCampaignType = async (id, type) => {
  try {
    const campaignType = await CampaignType.findByPk(id);
    if (!campaignType) {
      throw new Error("Campaign type not found");
    }
    campaignType.type = type;
    await campaignType.save();
    return campaignType;
  } catch (error) {
    throw new Error("Error updating campaign type: " + error.message);
  }
};

const deleteCampaignType = async (id) => {
  try {
    const campaignType = await CampaignType.findByPk(id);
    if (!campaignType) {
      throw new Error("Campaign type not found");
    }
    await campaignType.destroy();
    return { message: "Campaign type deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting campaign type: " + error.message);
  }
};

module.exports = {
  getAllCampaignTypes,
  createCampaignType,
  updateCampaignType,
  deleteCampaignType,
};