exports.uploadService = (req, res) => {
    try {
        const fileUrl = `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${req.file.key}`;
        res.status(200).json({url:fileUrl});
    } catch (error) {
        return res.json({ message: "Error Occured while Uploading"})
    }
}