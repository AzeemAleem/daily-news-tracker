import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Typography, Card, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Meta } = Card;
const ArticleList = ({ articles }) => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    return (
        <Row justify={"center"}>
            <Col span={20}>
                <Title data-testid="title">NY Times Most Popular Articles</Title>
                <Row gutter={16}>
                    {articles?.map((article) => (
                        <Col xl={6} lg={8} sm={12} key={article?.id} role="article">
                            <Card
                                hoverable
                                cover={
                                    <img
                                        alt="article-image"
                                        src={article?.media?.[0]?.["media-metadata"]?.[2]?.url || ""}
                                    />
                                }
                                style={{
                                    marginBottom: 20,
                                }}
                                onClick={() => navigate(`/article/${article?.id}`)} // Navigate to article details on click
                            >
                                <Meta
                                    data-testid="article-title"
                                    title={article.title}
                                    description={article.abstract}
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
};

// Define prop types
ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired, // Assuming 'id' is a number
            title: PropTypes.string.isRequired, // Assuming 'title' is a string
            byline: PropTypes.string.isRequired, // Assuming 'byline' is a string
        })
    ).isRequired,
};

export default ArticleList;
