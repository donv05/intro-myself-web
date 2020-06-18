import React, { useState } from 'react';
import './promoItem.css'
function PromoItem() {
  return (
    <React.Fragment>
      <div className="center animate__animated animate__fadeInLeft">
        <div className="property-card">
          <a href="#">
            <div className="property-image">
              <div className="property-image-title">
                {/* <h5>Card Title</h5>  */}
              </div>
            </div></a>
          <div className="property-description">
            <h2 className="animate__animated animate__bounce">Trường Đại Học Cần Thơ</h2>
            <div className="py-2">
                <b>Địa chỉ</b>: <p>Khu II, Đường 3-2, Xuân Khánh, Ninh Kiều, Cần Thơ</p>
            </div>
            <p>Trường Đại học Cần Thơ là một trường đại học tại Việt Nam, có vị thế dẫn đầu về đào tạo đa ngành, một trụ cột trong hệ thống giáo dục bậc cao, được Chính phủ xếp vào nhóm trường đại học trọng điểm quốc gia.</p>
          </div>
        </div>
        </div>
    </React.Fragment>
  );
}

export default PromoItem;