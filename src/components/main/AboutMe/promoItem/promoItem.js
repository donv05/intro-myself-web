import React, { } from 'react';
import './promoItem.css'

function PromoItem() {
  return (
    <React.Fragment>
        <div className="card-info card--border">
            {/* <div className="card-info-header-image">
                <img></img>
                <div className="card-info-header-image--title">
                </div>
            </div>    */}
            <div className="card-info-des">
                <h2 className="card-info-des__title heading-secondary">Cần Thơ University</h2>
                <div className="card-info-des__content">
                    <b>Address: <span>Khu II, Đường 3-2, Xuân Khánh, Ninh Kiều, Cần Thơ</span></b>
                    <p>Trường Đại học Cần Thơ là một trường đại học tại Việt Nam, có vị thế dẫn đầu về đào tạo đa ngành, một trụ cột trong hệ thống giáo dục bậc cao, được Chính phủ xếp vào nhóm trường đại học trọng điểm quốc gia.</p>
                </div>
                
            </div>
        </div>
    </React.Fragment>
  );
}

export default PromoItem;